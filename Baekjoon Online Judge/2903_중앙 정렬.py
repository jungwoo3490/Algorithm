n = int(input())
dot = 2
for i in range(n):
    dot = dot + (dot-1)
result = dot * dot
print(result)