

# Following tweepy guide http://tweepy.readthedocs.io/en/v3.5.0/getting_started.html

from credentials import *
import tweepy

auth = tweepy.OAuthHandler(consumer_key, consumer_secret)
auth.set_access_token(access_token, access_token_secret)

api = tweepy.API(auth)

'''
public_tweets = api.home_timeline()
for tweet in public_tweets:
    print(tweet.text)

user = api.get_user('heyandy889')
print(user.screen_name)
print(user.followers_count)
print(len(user.friends()))
for friend in user.friends():
   print(friend.screen_name)
'''


userA = api.get_user('heyandy889')
userB = api.get_user('inventonater')



#friendship = api.show_friendship(str(userA.id) + "/" + userA.screen_name, str(userB.id) + "/" + userB.screen_name)
friendship = api.show_friendship(userA.id, userA.screen_name, userB.id, userB.screen_name)
friendship = api.show_friendship(source_screen_name=userA.screen_name, target_screen_name=userB.screen_name)
print(friendship)


