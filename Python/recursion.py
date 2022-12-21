def isEven(number):
    if number == 0:
        return True
    elif number == 1:
        return False
    else:
        return isEven(number - 2)

print(isEven(22))