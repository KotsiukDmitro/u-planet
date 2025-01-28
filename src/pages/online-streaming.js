import React from "react";
import {Layout} from '../components/Layout'
import { MainIfo, LiveSteaming, Features, Solution, TechStack } from "../components/OnlineStreamingPage";

const OnlineStreamingPage = ()=> {

    return (
        <Layout>
           <MainIfo />
           <LiveSteaming />
           <Features />
           <Solution />
           <TechStack />
        </Layout>
    )
}

export default OnlineStreamingPage

