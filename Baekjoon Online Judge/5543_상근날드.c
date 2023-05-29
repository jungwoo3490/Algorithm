#include <stdio.h>
int main() {
    int i = 0;
    int a[3] = { 0 };
    int b[2] = { 0 };
    for (i = 0; i < 3; i++) {
        scanf("%d", &a[i]);
    }
    for (i = 0; i < 2; i++) {
        scanf("%d", &b[i]);
    }
    int mina = a[0];
    for (i = 1; i < 3; i++) {
        if (a[i] < mina)
            mina = a[i];
    }
    int minb = b[0];
    if (b[1] < minb)
        minb = b[1];
    printf("%d\n", mina + minb - 50);
    return 0;
}