"""
    Classes and functions for generating views.py files for simple studies
"""
from study_settings import StudySettings


class ViewsBuilder:
    """
        Class for creating urls.py files from StudySettings objects.
    """
    
    views_file_template = r"""
from django.http import *
from django.contrib.auth.decorators import login_required
from django.template import Template, Context, RequestContext
from django.contrib.auth.models import User
from studies.models import Study, Group, Stage, StageGroup, StudyParticipant, UserStage, Document
from users.models import UserRoles
from studies.forms import DocumentForm
from django.shortcuts import render_to_response
from django.core.urlresolvers import reverse

{0}
"""
    
    #@login_required
    #def stage_two(request):
    #    return render_to_response('tutorial_study/study_display.html', {'number': 2})
    stage_url_template = """
@login_required
def {3}_{1}(request):

    template_file = open("{2}", "r")
    template = Template("".join(template_file.readlines()))

    context = RequestContext(request)
    form = DocumentForm()
    #get study:
    current_stage = None
    study = Study.objects.get(name="{0}")
    active_stages = UserStage.objects.filter(user=request.user, status=1)
    for s in active_stages:
        if s.stage.study == study:
            current_stage = s
    
    context["current_stage"] = current_stage
    context["form"] = form
    return HttpResponse(template.render(context))
"""
    
    def __init__(self, *settings_list):
        self.settings_list = settings_list
      
    def write_views_file(self, module_dir):

        views_file = open("{0}/{1}".format(module_dir, "views.py"), "w")
        fcn_list = []
        for study in self.settings_list:
            for stage in study.stages:
                template_file = "{0}/{1}/stages/{2}/template.html".format(module_dir, study.name_stub, stage)
                fcn_list.append(ViewsBuilder.stage_url_template.format(study.name, stage, template_file, study.name_stub))
        
        views_file.write("# This file was generated by study_builder.views_builder.py\n")
        views_file.write(ViewsBuilder.views_file_template.format("\n".join(fcn_list)))









