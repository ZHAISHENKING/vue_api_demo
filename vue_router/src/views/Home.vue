<template>
    <div>
        <h2>Home</h2>
        <div>
            <ul>
                <router-link to="/home/message">message</router-link>
            </ul>
        </div>
        <div>    
            <router-view></router-view>
        </div>
    </div>
</template>