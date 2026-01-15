class Solution {
public:
    vector<int> sortedSquares(vector<int>& nums) {
        int i=0;
        int j=nums.size()-1;
        int n=nums.size()-1;
        vector<int> ans(nums.size());
        while(i<=j){
            if(abs(nums[i])>abs(nums[j])){
                ans[n--]=nums[i]*nums[i];
                i++;
            }else{
                ans[n--]=nums[j]*nums[j];
                j--;
            }
        }
        return ans;
    }
};