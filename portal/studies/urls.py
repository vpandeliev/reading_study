from django.conf.urls import *
from portal.studies.views import *

urlpatterns = patterns('',
    url(r'^$', show_many_studies, name="show_many_studies"),
    url(r'^ic$', informed_consent, name="informed_consent"), # send people here for informed consent
    url(r'^consented$', consented, name="consented"),
    url(r'^quest$', questionnaire, name="questionnaire"),
    url(r'^fsess$', finish_session, name="finish_session"),
    #url(r'^formcount/(\d)$', increment_form_count, name="increment_form_count"),
    url(r'^finfsess$', finish_infinite_session, name="finish_infinite_session"),
    # can remove this one after replacing cheat_fsess references
    url(r'^cheat_fsess$', finish_infinite_session, name="cheat_finish_session"),
    url(r'^(\d+)/(\d+)$', show_one_study, name="show_one_study"),
    #url(r'^upload/(\d+)$', upload_file, name='upload_file'),
    # General function to store arbitrary JSON strings from a user study
    url(r'^save_post_data$', save_post_data, name="save_post_data"),
    
)
