import csv
import os
from tabulate import tabulate
import pandas as pan


data = []
field_names = []

def save_to_csv_file():
    with open('Address_Directory.csv', 'w') as csvfile:
        writer = csv.DictWriter(csvfile, fieldnames=field_names)
        writer.writeheader()
        writer.writerows(data)


def fill_up_data_stucture(path):
    isFile = os.path.isfile(path)
    if (isFile):
        with open(path, mode='r')as file:
            list_of_lists = csv.reader(file)
            data.clear()
            flag = 0
            for list in list_of_lists:
                if flag == 0:
                    flag = 1

                    for i in range(0, len(list)-6):
                        field_names.append(list[i])
                    continue

                temp = dict()
                for i in range(0, len(list)-6):
                    temp[field_names[i]] = list[i]

                data.append(temp)
                



def drop_rows():
    global data
    parameters = {"% Chng" : "-3"}

    search_value = []
    for result in filter(lambda item: all((float(item[key]) >= float(value) for (key, value) in parameters.items())), data):
        search_value.append(result)

    data = search_value    


def average_of_all():
    global data

    sum_open = 0
    sum_high = 0
    sum_low = 0
    total_data = len(data)
    for i in data:
        temp = map(lambda x: x if (x!=",") else "",i["Open"])
        sum_open += float(''.join(temp))

        temp = map(lambda x: x if (x!=",") else "",i["High"])
        sum_high += float(''.join(temp))

        temp = map(lambda x: x if (x!=",") else "",i["Low"])
        sum_low += float(''.join(temp))

    sum_open/=total_data
    sum_high/=total_data
    sum_low/=total_data

    to_store = str(sum_open)+"\n" + str(sum_high)+"\n" + str(sum_low)
    file1 = open('avg_output.txt', 'w')
    file1.write(to_store)
    file1.close()

def start_with():
    global data

    check = input("Enter the character : ")
    search_value = []

    for result in data:
        if result["Symbol"].startswith(check):
            search_value.append(result)



    file1 = open('./stock_output.txt', 'w')
    for s in search_value:
        lst = ""
        for value in s.values():
            value = value + "  "
            lst+=value
        file1.writelines(lst+"\n")

    file1.close()
    
fill_up_data_stucture("lab_11_data.csv")
drop_rows()
average_of_all()
start_with()