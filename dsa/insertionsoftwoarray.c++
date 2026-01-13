class Solution {
public:
    vector<int> intersection(vector<int>& nums1, vector<int>& nums2) {
        unordered_set<int> check ;
        vector<int>ans;
        check.insert(nums1.begin(),nums1.end());
        for(int i=0;i<nums2.size();i++){
            if(check.find(nums2[i])!=check.end()){
                ans.push_back(nums2[i]);
                check.erase(nums2[i]);
            }
        }
        return ans;

    }
};