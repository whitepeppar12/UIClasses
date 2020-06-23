
var sData = {
    name: "RAJ",
    age: 20,
    gender: 'Male',
    marks: [34, 55 ,78, 90],
    total: 0,
    avg: 0,
    getTotalAndAvg : function(){
        for(var i = 0; i < this.marks.length; i++){
            this.total += this.marks[i];
        }
        this.avg = this.total / this.marks.length;
    },
    getGrade : function(){
        this.getTotalAndAvg();
        if(this.avg > 40){
            this.grade = "Passed";
        }else{
            this.grade = "Failed";
        }
    },
    displayData : function(){
        this.grade();
        var ulTag = document.createElement("ul");
        for(var temp in this){
            console.log(temp);
            if(typeof(this[temp] )!= 'function'){
                var liTag = document.createElement("li");
                liTag.innerHTML = temp + " : " + this[temp];
            }
            ulTag.append(liTag);
        }
        console.log(ulTag);
        document.querySelector(".dContainer").append(ulTag);
    }
}
sData.displayData();