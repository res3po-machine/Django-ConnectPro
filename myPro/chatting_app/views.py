from django.shortcuts import render, redirect
from profile_app.models import Profile
from discover_app.models import Room
from connect_app.models import UserMd
# Create your views here.

def on_chat(request, roomId = 0):
    userId = request.user.id
    profileInfo = Profile.objects.get(user__id = userId)
    friends = get_friends(userId)
    print(roomId)
    return render(request, "chatting/chat.html", {'profileInfo': profileInfo, 'roomId': int(roomId), 'friends': friends})

def select_chat(reuqest, curId):
    UserMd.objects.filter(is_active=True).update(is_active=False)
    curFriend = UserMd.objects.get(id = curId)
    curFriend.is_active = True
    curFriend.save()
    #Find the correct room
    userId = reuqest.user.id
    if reuqest.user.user_type == 'client':
        room = Room.objects.get(client__id = userId, developer__id = curId)
    else:
        room = Room.objects.get(developer__id = userId, client__id = curId)
    
    print('client:  ', room.client, '------------', 'developer:  ', room.developer)
    return redirect('chat', roomId= room.id)

def get_friends(userId):
    user = UserMd.objects.get(id=userId)
    if user.user_type == 'client':
        fiend_Ids = Room.objects.filter(client__id = userId).values_list('developer__id', flat= True)
        friends = Profile.objects.filter(user__id__in = fiend_Ids)
    else:
        fiend_Ids = Room.objects.filter(developer__id = userId).values_list('client__id', flat= True)
        friends = Profile.objects.filter(user__id__in = fiend_Ids)
    print(friends)
    return friends