function searchingInBST(root,val) {
    if (!root) {
       return null;
    };
    if (root.val === val) {
       return root;
    };
    if (root.val < val) {
       return searchingInBST(root.right,val);
    } else {
       return searchingInBST(root.left,val);
    };
};