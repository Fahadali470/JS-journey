function likePost( step )
{
    let likeCount=0;
    return function myLike()
    {
        likeCount+=step;
        return likeCount;
    }
}
let like=likePost(2)
// console.log(like)
console.log(like());
console.log(like());
console.log(like());
console.log(like());