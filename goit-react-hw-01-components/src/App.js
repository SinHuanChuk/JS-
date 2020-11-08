import React from 'react';
import user from './components/profile/user.json'
import Profile from './components/profile/Profile'
import stat from './components/statistic/statistic-data.json'
import Statistic from './components/statistic/Statistic'
import friends from './components/friends/friends.json'
import Friends from './components/friends/Friends'
import transactions from './components/transactions/transactions.json'
import TransactionHistory from './components/transactions/Transactions'

const App = () => (
    <div>
        <Profile
    name = {user.name}
    tag = {user.tag}
    location = {user.location}
    avatar = {user.avatar}
    stats = {user.stats}
    />
    <Statistic
    title = 'Upload stats'
    stat = {stat}    
    />
    <Friends friends = {friends}/>
    <TransactionHistory items = {transactions}/>
    </div>
)

export default App