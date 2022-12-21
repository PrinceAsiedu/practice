def largest(num_list):
    my_max = num_list[0]
    for index in range(1, len(num_list)):
        if my_max < num_list[index]:
            my_max = num_list[index]
    return my_max


a = largest([5, 6, 35, 32, 63, 15, 23, 17])
print(a)