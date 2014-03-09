from django import forms
from portal.studies.models import *
from django.contrib.admin import widgets
from settings import MEDIA_ROOT
import os

class NewStudyForm(forms.ModelForm):
    class Meta:
        model = Study
    def __init__(self, *args, **kwargs):
        super(NewStudyForm, self).__init__(*args, **kwargs)

class AddParticipantForm(forms.Form):
    email = forms.EmailField()
    role = forms.BooleanField(label="Investigator?", required=False) #participant by default

class DocumentForm(forms.Form):
    docfile = forms.FileField(
        label='Select a file'
    )

    def handle_uploaded_file(self,file, custom_path, filename):
        #print type(file), "file.name=",file.name
        #print dir(file)
        #if the directory doesn't exist, create it
        file_number = "00"
        directory = MEDIA_ROOT + '/user_images/' + custom_path + "/"
        print(file.name)
        if not os.path.exists(directory):
            os.makedirs(directory)
        filepath = directory + filename + "." + file.name.split('.')[-1]
        destination = open(filepath, 'wb+')
        for chunk in file.chunks():
            destination.write(chunk)

class QForm(forms.Form):
    MCUNIQUE =  (('a', 'Answer a'),('b', 'Answer b'))
    MCNONUNIQUE = (('fruit', 'Fruits'),('veg', 'Veggies'))
    MCSCALE = ((1,"1 (Not at all)"),
                (2,"2"),
                (3,"3"),
                (4,"4 (Somewhat)"),
                (5,"5"),
                (6,"6"),
                (7,"7 (Totally)"))
    
    shortanswer = forms.CharField(label="How often do you eat salad?",max_length=100,widget=forms.TextInput)
    longanswer = forms.CharField(label="Tell us about your most memorable childhood experience.",widget=forms.Textarea)
    multiple_unique = forms.ChoiceField(widget=forms.RadioSelect, choices=MCUNIQUE)
    multiple_nonunique = forms.MultipleChoiceField(widget=forms.CheckboxSelectMultiple, choices=MCNONUNIQUE)
    multiple_scale = forms.ChoiceField(widget=forms.RadioSelect, choices=MCSCALE)
    
    
    
