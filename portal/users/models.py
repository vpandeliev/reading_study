from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save


class UserRoles:
    """The possible userclasses. Just investigator and participant for now. Superuser
    will be undefined if one exists."""
    UNDEFINED = -1
    INVESTIGATOR = 0
    PARTICIPANT = 1


class UserProfile(models.Model):
    """Extends the django User class to hold custom data."""
    user = models.OneToOneField(User)  
    user_role = models.IntegerField("The role of this user.")
    
    def __str__(self):  
          return "%s's profile" % self.user  


def create_user_profile(sender, instance, created, **kwargs):
    """Called whenever a user is saved. Creates a new profile if none exists for the
    user yet."""
    if created:
        UserProfile.objects.create(user=instance, user_role=UserRoles.UNDEFINED) 

                
post_save.connect(create_user_profile, sender=User, dispatch_uid="users-profilecreation-signal")

