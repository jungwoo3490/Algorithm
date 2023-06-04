#include <stdio.h>
int main()
{
    int n;
    int add1 = 0;
    int add2 = 0;
    int a, b;
    int count = 0;
    scanf("%d", &n);
    add2 = n;
    while (1)
    {
        a = add2 / 10;
        b = add2 % 10;
        add1 = a + b;
        add2 = (b * 10) + add1 % 10;
        count++;
        if (add2 == n)
            break;
    }
    printf("%d\n", count);
    return 0;
}