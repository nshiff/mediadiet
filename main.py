# Following tweepy guide http://tweepy.readthedocs.io/en/v3.5.0/getting_started.html
from credentials import *
import tweepy
import json

auth = tweepy.OAuthHandler(consumer_key, consumer_secret)
auth.set_access_token(access_token, access_token_secret)
api = tweepy.API(auth)

woeid = {}
woeid['worldwide'] = 1
woeid['usa'] = 23424977
# woeid.chicago = 2379574
# woeid.newyork = 2459115

'''
locations
as_of
created_at
trends
'''

trends_available = api.trends_available()
response = api.trends_place(woeid['usa'])

print(response[0]['as_of'])
print(response[0]['created_at'])
print(response[0]['locations'])

print(json.dumps(response[0]['trends'], indent=4))