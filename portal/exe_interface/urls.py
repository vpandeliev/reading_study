from django.conf.urls import *
from portal.exe_interface.views import *


urlpatterns = patterns('',
    url(r'^$', testing, name="testing"),
    url(r'^login$', login, name="login"),
    url(r'^get_current_stage_info$', get_current_stage_info, name="get_current_stage_info"),
    url(r'^fsess$', fsess, name="fsess"),
    url(r'^get_user_data$', get_user_data, name="get_user_data")
)

