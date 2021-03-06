from django.conf.urls import *
from portal.investigator.views import *

urlpatterns = patterns('', 
                       url(r'^$', investigator_home, name='investigator_home'),
                       url(r'^get_data', get_data, name='get_data'),
                       url(r'^download_files', download_files, name='download_files'),
                       url(r'^download_file', download_file, name='download_file'),
                       url(r'^upload_file/(?P<user>[a-zA-Z0-9_]+)(/)?$', upload_file, name='upload_file'),
                       url(r'^(?P<sort_by>[a-z_]+)$', investigator_home, name='investigator_home'),
                       url(r'^view_user/(?P<user>[a-zA-Z0-9_]+)$', view_user, name='user_inspector'),
                       url(r'^add_user_form/(?P<study_id>[0-9]+)$', add_user_form, name='add_user_form'),
                       url(r'^add_user/(?P<study_id>[0-9]+)/$', add_user, name='add_user'),

                      )
