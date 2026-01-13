class Solution {
public:
    int maxProfit(vector<int>& prices) {
        int min=prices[0];
        int maxprt=0;
        for(int i=0;i<prices.size();i++){
            if(prices[i]<min){
                min=prices[i];
            }
            else{
                maxprt=max(maxprt,prices[i]-min);
            }
        }
        return maxprt;
    }
};