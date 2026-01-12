class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        unordered_map<int,int> ans;
        for(int i=0;i<nums.size();i++){
            int cmp=target-nums[i];
            if(ans.contains(cmp)){
                return {ans[cmp],i};

            }
            ans[nums[i]]=i;
        }
        return {};
    }
};