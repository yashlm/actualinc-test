#include <bits/stdc++.h>
using namespace std;
struct SinglyLinkedListNode {
    int data;
    SinglyLinkedListNode* next;
    SinglyLinkedListNode(int val) : data(val), next(nullptr) {}
};

SinglyLinkedListNode* mergeLists(SinglyLinkedListNode* headA, SinglyLinkedListNode* headB) {
    SinglyLinkedListNode dummy(0);
    SinglyLinkedListNode* current = &dummy;

    while (headA != nullptr && headB != nullptr) {
        if (headA->data <= headB->data) {
            current->next = headA;
            headA = headA->next;
        } else {
            current->next = headB;
            headB = headB->next;
        }
        current = current->next;
    }

    if (headA != nullptr) {
        current->next = headA;
    } else if (headB != nullptr) {
        current->next = headB;
    }

    return dummy.next;
}

SinglyLinkedListNode* createList(vector<int>& vals) {
    if (vals.empty()) return nullptr;
    SinglyLinkedListNode* head = new SinglyLinkedListNode(vals[0]);
    SinglyLinkedListNode* current = head;
    for (int i = 1; i < vals.size(); i++) {
        current->next = new SinglyLinkedListNode(vals[i]);
        current = current->next;
    }
    return head;
}

void printList(SinglyLinkedListNode* head) {
    while (head != nullptr) {
        cout << head->data << " ";
        head = head->next;
    }
    cout << endl;
}

int main() {
    int t;
    cin >> t; 
    while (t--) {
        int n, m;
        cin >> n; 
        vector<int> listA(n);
        for (int i = 0; i < n; i++) {
            cin >> listA[i];
        }

        cin >> m; 
        vector<int> listB(m);
        for (int i = 0; i < m; i++) {
            cin >> listB[i];
        }

        SinglyLinkedListNode* headA = createList(listA);
        SinglyLinkedListNode* headB = createList(listB);

        SinglyLinkedListNode* mergedHead = mergeLists(headA, headB);

        printList(mergedHead);
    }

    return 0;
}
