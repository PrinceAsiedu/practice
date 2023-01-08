import requests

def connection():
    timeout = 20
    try:url = "https://www.google.com";requests.get(url=url,timeout=timeout);return True
    except: return False

print("connected" if connection() else "not connected")
