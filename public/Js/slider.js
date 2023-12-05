document.getElementById('type-next').onclick = function(){
let lists = document.querySelectorAll('.item-slide');
document.getElementById('slide').appendChild(lists[0])
}

document.getElementById('type-prev').onclick = function(){
    let lists = document.querySelectorAll('.item-slide');
    document.getElementById('slide').prepend(lists[lists.length - 1])
}