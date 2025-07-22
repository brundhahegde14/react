// function lengthOfLongestSubstring(s){
// let set = new Set();
// const map = new Map(); 
//   let left =0; 
//   let max =0;

// for (let right = 0; right < s.length; right++) {
// while(set.has(s[right]))
// {
//     set.delete(s[left]);
//     left++;
// }
//  set.add(s[right]);
//  max=Math.max(max,right-left+1);

// }
// return max;
// }
// console.log(lengthOfLongestSubstring("abcabcbb")); 
// console.log(lengthOfLongestSubstring("bbb"));    
// console.log(lengthOfLongestSubstring("pwwkew"));


// for( i=1;i<=1000;i++){
//     let temp=i;
// let rev=0;
// while(temp>0){
//     let rem=temp%10;
//     rev=rev*10+rem;
//     temp=Math.floor(temp/10);
//     }
//    if(i==rev)
//    {
//     console.log(i);
//    }
// }

function shortestPalindrome(s){
    for(let i=s.length;i>=2;i--){
let  front=s.slice(2,i);
let  last=[...front].reverse().join('');
if(front===last)
{
let add=[...s.slice(i)].reverse().join('');
return add+s;
}
    }
return s;
    }

console.log(shortestPalindrome("abcde"));
console.log(shortestPalindrome("defe"));
