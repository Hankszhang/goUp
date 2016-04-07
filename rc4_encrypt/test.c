#include <openssl/rc4.h>
#include <stdio.h>
#include <string.h>
#include <malloc.h>
#define LEN 256

int main(int argc, char * argv[])
{
    unsigned char plaintext[LEN];
    unsigned char key_data[LEN];
    memset(plaintext, 0, sizeof(plaintext));  //置零
    memset(key_data, 0, sizeof(key_data));

    //static unsigned char key_data[256] = {
    //    0x01, 0x23, 0x45, 0x67, 0x89, 0xab, 0xcd, 0xef
    //};

    printf("Please input the plaintext:");
    fgets(plaintext, LEN-1, stdin);
    printf("Please input the key_data:");
    fgets(key_data, LEN-1, stdin);

    /* 输入数据和key参数 */
    int length = strlen(plaintext);
    int key_len = strlen(key_data);
    printf("The length of plaintext: %d\n", length-1);
    printf("The length of key: %d\n\n", key_len-1);

    unsigned char* ciphertext = (unsigned char*) malloc(sizeof(char) * length); 
    unsigned char* decryptedtext = (unsigned char*) malloc(sizeof(char) * length); 

    RC4_KEY rc4key;

    /* 解密 */
    RC4_set_key(&rc4key, key_len, key_data);
    RC4(&rc4key, length, plaintext, ciphertext);

    // 将密文以二位十六进制输出。
    printf("Ciphertext: \n");
    for(int i=0; i< length; i++){
        printf("%02x", ciphertext[i]);
    }
    printf("\n\n");

    /* 加密 */
    // Reset the key stream.
    RC4_set_key(&rc4key, key_len, key_data);
    RC4(&rc4key, length, ciphertext, decryptedtext);

    /* 判断是否解密成功 */
    if(strcmp(decryptedtext, plaintext) == 0){
        printf("Decryption success!\n");
        printf("Decryptedtext:%s\n", decryptedtext);
        //printf("The length of Decryptedtext: %d\n", (int)strlen(decryptedtext));
    }else{
        printf("Decryption failure!\n");
    }

    free(ciphertext);
    free(decryptedtext);

    return 0;
}
