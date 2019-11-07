export default {
    async getIndexData(){
        let res=await fetch('http://localhost:3000/wyyx');
        let data=await res.json();
        return data
    },
    async getItemData(){
        let res=await fetch('http://localhost:3000/wyyx/item');
        let data=await res.json();
        return data
    },
    async getScanData(){
        let res=await fetch('http://localhost:3000/wyyx/scan');
        let data=await res.json();
        return data
    }

}