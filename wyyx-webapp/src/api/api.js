export default {
    async getIndexData(){
        let res=await fetch('http://106.13.228.248:3000/wyyx');
        let data=await res.json();
        return data
    },
    async getItemData(){
        let res=await fetch('http://106.13.228.248:3000/wyyx/item');
        let data=await res.json();
        return data
    },
    async getScanData(){
        let res=await fetch('http://106.13.228.248:3000/wyyx/scan');
        let data=await res.json();
        return data
    }

}