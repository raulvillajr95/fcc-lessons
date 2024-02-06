#include <iostream>
#include <string>
#include <fstream>
#include <vector>
using namespace std;

// Shifts alphabet according to letter
string shiftAlpha(char letter)
{
   letter = toupper(letter);
   string alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   string result;
   
   if (letter == 'A')
   {
      result = alphabet;
   }
   else
   {
      for (int i = 0; i < alphabet.length(); i++)
      {
         if (alphabet[i] == letter)
         {
            result.append(alphabet.substr(i, alphabet.length() - 1));
            result.append(alphabet.substr(0, i));
         }
      }
   }
   
   return result;
}

vector<string> ciphers(string keyword)
{
   vector<string> results;
   
   for (int i = 0; i < keyword.length(); i++)
   {
      string shiftedBet = shiftAlpha(keyword[i]);
      results.push_back(shiftedBet);
   }
   
   return results;
}

string encryptedString(string message, vector<string> cryptedAlphas, int keyLen)
{
    string result = "";
    string alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    int pos = 0;

    for (int i = 0; i < message.length(); i++)
    {
        bool charFound = false;
        for (int j = 0; j < 26; j++)
        {
            if (isupper(message[i]))
            {
                if (message[i] == alphabet[j])
                {
                    result += cryptedAlphas[pos % keyLen][j]; // ???
                    cout << cryptedAlphas[pos%keyLen][0] << " TEST" << endl;
                    pos++; // We don't just keep using the next one, we go back to zero
                    charFound = true;
                }
    
            }
            else
            {
                if (message[i] == tolower(alphabet[j]))
                {
                    result += tolower(cryptedAlphas[pos % keyLen][j]);
                    cout << cryptedAlphas[pos%keyLen][0] << " TEST" << endl;
                    pos++;
                    charFound = true;
                }
            }
        }
        if (charFound == false)
        {
            result += message[i];
        }
        
    }

    return result;
}

string decryptedString(string message, vector<string> cryptedAlphas, int keyLen)
{
    string result = "";
    string alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    int pos = 0;

    for (int i = 0; i < message.length(); i++)
    {
        bool charFound = false;
        for (int j = 0; j < 26; j++)
        {
            if(isupper(message[i]) && charFound == false)
            {
                if (message[i] == cryptedAlphas[pos % keyLen][j])
                {
                    cout << cryptedAlphas[pos%keyLen][0] << " TEST" << endl;
                    result += alphabet[j];
                    pos++;
                    charFound = true;
                }
            }
            else if (charFound == false)
            {
                if (message[i] == tolower(cryptedAlphas[pos % keyLen][j]))
                {
                    cout << cryptedAlphas[pos%keyLen][0] << " TEST" << endl;
                    result += tolower(alphabet[j]);
                    pos++;
                    charFound = true;
                }
            }
        }
        if (charFound == false)
        {
            result += message[i];
        }
        
    }
    

    return result;
}

int main(int argc, char* argv[])
{
    if (argc != 5)
    {
        cout << "Please supply 5 arguments in this order." << endl;
        cout << "./<file-name> -<e-or-d> -k<key-word> <input-file> <output-file>" << endl;

        return 0;
    }

    string firstArg = argv[0];
    string secondArg = argv[1];
    string thirdArg = argv[2];
    string fourthArg = argv[3];
    string fifthArg = argv[4];

    string keyword = thirdArg.substr(2, thirdArg.length()-2);
    vector<string> cryptedCiphers = ciphers(keyword);

    // Turn file contents into a string
    string message = "";
    ifstream inputFile (fourthArg);
    char c;
    int pos = 0;
    while(inputFile.get(c))
    {

        message += c;

        pos++;
        inputFile.seekg(pos);
    }

    // Encrypt/Decrypt string
    string cryptedMessage;
    if (secondArg == "-e")
    {
        cryptedMessage = encryptedString(message, cryptedCiphers, keyword.length());
    }
    else if (secondArg == "-d")
    {
        cryptedMessage = decryptedString(message, cryptedCiphers, keyword.length());
    }

    // Output string to file
    ofstream outputFile (fifthArg);
    outputFile << cryptedMessage;
    
    return 0;
}


/* Ideas:
- decryption needs work
- do it for lowercases
    • work on encryptedString/decryptedString
    • work on 
*/