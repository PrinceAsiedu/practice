countries = {
    'Ghana' : 'Accra', 
    'America': 'New York',
    'Great Britain': 'London'
}


def find_city(city):
    found = True    
    if city in countries.values():
        return found
    else:
        found = False
        return found

print(find_city('Accra'))