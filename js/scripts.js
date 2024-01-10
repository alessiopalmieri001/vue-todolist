const { createApp } = Vue;

createApp({
data(){
    return{
    tasks:[
        {
        text: 'Fare la spesa',
        done: false
        }
    ],

    newTask:'',
    isError: false,
    errorMsg:''
    }
},

methods:{
    writeErrors(errorStr){
    this.errorMsg = errorStr;
    setTimeout(()=>{
        this.errorMsg = '';
    },2000)
    },

    addTask(){

    if(this.newTask.length < 5){
        this.writeErrors ('Errore! La task deve avere almeno 5 caratteri');
    }else{
    // aggiungo newTask all'array tasks
    const newTaskObj =  {
        text: this.newTask,
        done: false
    }
    this.tasks.unshift(newTaskObj);
    this.newTask = '';
    }
    },
    
    removeTask(index){
    if(this.tasks[index].done){
        this.tasks.splice(index,1)
    }else{
        this.writeErrors("Errore! La task non è stato ancora svolto!");
    }
    }
},

}).mount('#app');