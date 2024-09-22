#include <bits/stdc++.h>
using namespace std;

vector<string> movingShift(string s, int shift) {
    int n = s.size();
    string codedMessage = s;

    for (int i = 0; i < n; ++i) {
        if (s[i] >= 'a' && s[i] <= 'z') {
            codedMessage[i] = (s[i] - 'a' + shift + i) % 26 + 'a';
        } else if (s[i] >= 'A' && s[i] <= 'Z') {
            codedMessage[i] = (s[i] - 'A' + shift + i) % 26 + 'A';
        } else {
            codedMessage[i] = s[i]; 
        }
    }

    int partSize = (n + 4) / 5;  
    vector<int> partLengths(5, partSize);  

    int excess = 5 * partSize - n;  
    for (int i = 4; excess > 0 && i >= 0; --i) {
        if (partLengths[i] > 0) {
            --partLengths[i];
            --excess;
        }
    }

    vector<string> result;
    int currentIndex = 0;
    for (int i = 0; i < 5; ++i) {
        result.push_back(codedMessage.substr(currentIndex, partLengths[i]));
        currentIndex += partLengths[i];
    }

    return result;
}

int main() {
    // string s = "I should have known that you would have a perfect answer for me!!!";
    string s;
    getline(cin, s);
    int shift = 1;
    vector<string> sol = movingShift(s, shift);

    for (const auto& part : sol) {
        cout << "\"" << part << "\"" << endl;
    }

    return 0;
}
