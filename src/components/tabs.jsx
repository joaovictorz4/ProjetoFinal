import React from 'react'
import '../components/css/tabs.css'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import Register from '../components/formRegister'

export default class tabs extends React.Component {
    render() {
        return (
            <div>
                <Tabs defaultIndex={1} onSelect={index => console.log(index)}>
                    <TabList>
                        <Tab>Adicionar</Tab>
                    </TabList>
                    <TabPanel>
                        <Register handlePost={this.props.post}></Register>
                    </TabPanel>
                    <TabPanel>
                    </TabPanel>
                </Tabs>
            </div>
        )
    }
}