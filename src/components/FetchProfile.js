import React from "react";


export default class FetchProfile extends React.Component {
    state = {
        loading: true,
        user: null,
        coins: []
    };
    async componentDidMount() {
        const url = "https://service.getmoonbounce.com/users/0001/get-profile";
        const response = await fetch(url);
        const info = await response.json();
        this.setState({ user: url, loading: false, coins: info.data.coins })
        console.log(info.data.coins);
        
        // console.log(jsonData)
        // console.log(jsonData.data[0].links[0].youtube)
        

    }

        render(){
            return (
               <div>
                   <div className=" flex bg-slate-600 w-[300px] h-auto flex-col rounded-3xl ">
<div className="flex flex-row">
<div className="flex rounded-full bg-gray-200 h-12 w-12 p-8 mx-8 my-4 "> </div>
<div className=" flex flex-col my-6 pr-16">
<div className=" text-stone-200 mx-auto"> {this.state.coins}</div>
<div className=" flex-row text-stone-200 text-xs ">@threethirty </div>
<div className="text-indigo-400"> Pro+ </div>
</div>
</div>
<div className="flex flex-row mx-[125px] space-x-4 text-xs -my-5 ">
<div className="flex border-2 p-1 rounded-lg border-amber-300 text-amber-300 "> Musician </div>
<div className="flex rounded-lg border-2 p-1 rounded-lg border-purple-400 text-purple-400 "> Founder </div>
</div>
<div className="flex flex-row justify-center space-x-8">

<div className="flex rounded-xl bg-indigo-500 w-10 h-10 mx-1 my-10"> </div>
<div className="flex rounded-xl bg-blue-400 w-10 h-10 mx-1 my-10"> </div>
<div className="flex rounded-xl bg-purple-400 w-10 h-10 mx-1 my-10"> </div>
<div className="flex rounded-xl bg-gray-300 w-10 h-10 mx-1 my-10"> </div>
</div>
<div className="flex flex-row justify-center space-x-6 -my-12">
<div className="flex rounded-xl bg-slate-500 w-10 h-10 mx-1 my-10 p-12">
<p className="flex my-6 -mx-8 text-sm text-gray-100 ">Collective </p>
</div>
<div className="flex rounded-xl bg-slate-500 w-10 h-10 mx-1 my-10 p-12">
<p className="flex my-6 -mx-5 text-sm text-gray-100 ">Group </p>
</div>
</div>

<div className="justify-start mx-8 my-6 text-gray-400">Top Portals </div>

<div className="flex flex-row space-x-24 -my-6 pl-12">
<div className="flex rounded-full bg-blue-200 w-10 h-10 my-8 "> </div>
<div className="flex rounded-full bg-amber-300 w-10 h-10 my-8 "> </div>
</div>

</div>
               </div>
                
            )
        }


}