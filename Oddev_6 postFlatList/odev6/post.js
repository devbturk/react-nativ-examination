import React from 'react';

import {FlatList, Text, View, ScrollView,TouchableOpacity} from 'react-native';

export default class User extends React.Component{

    constructor(props){
        super(props);
        this.state={
            users:[],
            Kullanıcı:0,
        }
    }

    componentDidMount = async ()=>{
        let user =  await fetch('https://jsonplaceholder.typicode.com/posts')
        .then(r=>r.json());
        
            this.setState({users:user})
    };

    handlePress = id =>{
        this.setState({Kullanıcı:id})
    }

    userListView(){

        if(this.state.Kullanıcı<1){
            return(
                <Text style={{fontSize:15, margin:17}}>Lütfen Görmek İstediğiniz Kullanıcı Numarasını Seçiniz</Text>
            ) 
        }
        let renderUserList=[];
        this.state.users.map((v,k)=>{

            if(v.id===this.state.Kullanıcı){
               renderUserList.push(<Text style={{minHeight:80, fontSize:20, paddingLeft:10, marginTop:25}}>
             <Text style={{color:'darkblue', fontSize:18}}>ID:</Text> {v.id} {"\n\n"}
               <Text style={{color:'darkblue', fontSize:18}}>TITLE:</Text> {v.title} {"\n\n"}
               <Text style={{color:'darkblue', fontSize:18}}>BODY:</Text> {v.body} {"\n\n"}</Text>)
            }

        }
        )
        return renderUserList
    }

    render(){
        return(
        <View style={{flex:1}}>

              <Text style={{color: 'white', fontSize:17, textAlign:'center', backgroundColor:'#2E8B57', padding:20}}>
                <Text style={{color: 'white', fontSize:17}}>Listeden Numara Seçiniz </Text>{this.state.Kullanıcı}</Text>

             <ScrollView style={{flex:1,minHeight:360}}>
                {this.userListView()}
                </ScrollView>

            <FlatList style = {{marginTop:12,flex:1,minHeight:257,backgroundColor: 'white'}}

                let data = {this.state.users}
                renderItem={({item})=>{

                    return(
                       <TouchableOpacity onPress={()=>this.handlePress(item.id)} style={{minHeight: 30, backgroundColor: 'white'}}>
                           <Text style={{fontSize:18,color:'white', backgroundColor:'#2E8B57',textAlign:'center'}}>{item.id}</Text>
                       </TouchableOpacity> 
                    )
                }
                }
                
                />

                
        </View>
            

        )
    }
}