from PIL import Image

image = Image.open("lol.png")
loaded = image.load()
dim = image.size
imglength = dim[0]
imgwidth = dim [1]
#print('length: ' + str(imglength))
#print('width: ' + str(imgwidth))


string = ""

# a = loaded[0,0][2]
# print(bin(a))
# print(bin(a)[2:])
# b = ((bin(a)[2:]).zfill(8))
# print(b)
# print(b[0])
for x in range(imglength):
    for y in range(imgwidth):
        val = loaded[x,y][2]
        string += ((bin(val)[2:]).zfill(8))[0]

flag = ""
#print(string)
while len(string) != 0:
    flag += chr(int(string[:8], 2))
    string = string[8:]


print(flag)
