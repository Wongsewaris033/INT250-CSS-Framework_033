<script setup>
import {ref} from 'vue'

const count = ref(0);
const step = ref(1);
const previousCount = ref(null);

const min = 0;
const max = 100;

function increment(){
    previousCount.value = count.value;
    count.value = Math.min(count.value + step.value, max);
}

function decrement(){
    previousCount.value = count.value;
    count.value = Math.max(count.value - step.value, min);
}

function reset(){
    previousCount.value = count.value;
    count.value = 0;
}

function undo(){
    if(previousCount.value !== null){
        count.value = previousCount.value;
        previousCount.value = null;
    }
}
</script>

<template>
    <div class="card">
        <h1>Counter App</h1>
        <p>Click button to change the number.</p>

        <div class="count">{{ count }}</div>

        <div class="row">
            <button class="btn inc" @click="increment" :disabled="count >= max">+ Increase</button>
            <button class="btn dec" @click="decrement" :disabled="count <= min">- Decrease</button>
        </div>

        <div class="row">
            <button class="btn reset" @click="reset">Reset</button>
            <button class="btn undo" @click="undo" :disabled="previousCount === null">Undo</button>
        </div>

        <div class="hint">
            Step: <input type="number" min="1" v-model.number="step"/>
        </div>
    </div>
</template>

<style scoped>
.card {
    width: min(480px, 92vw);
    background-color: white;
    border-radius: 16px;
    padding: 32px;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
    margin: 20px auto;
}

h1 {
    margin: 0 0 8px;
    text-align: center;
    font-size: 36px;
    color: #2c3e50;
}

p {
    text-align: center;
    color: #7f8c8d;
    margin: 0 0 24px;
    font-size: 14px;
}

.count {
    font-size: 72px;
    font-weight: bold;
    text-align: center;
    color: black;
    margin: 32px 0;
    padding: 20px;
}

.row {
    display: flex;
    gap: 12px;
    justify-content: center;
    margin-bottom: 12px;
}

.btn {
    padding: 12px 24px;
    font-size: 16px;
    font-weight: 600;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    flex: 1;
    max-width: 180px;
}

.btn:disabled {
    opacity: 0.5;
}

.btn.inc {
    background-color: #2ecc71;
    color: white;
}

.btn.inc:hover:not(:disabled) {
    background-color: #27ae60;
}

.btn.dec {
    background-color: #e74c3c;
    color: white;
}

.btn.dec:hover:not(:disabled) {
    background-color: #c0392b;
}

.btn.reset {
    background-color: #95a5a6;
    color: white;
}

.btn.reset:hover:not(:disabled) {
    background-color: #7f8c8d;
}

.btn.undo {
    background-color: #f39c12;
    color: white;
}

.btn.undo:hover:not(:disabled) {
    background-color: #e67e22;
}

.hint {
    margin-top: 24px;
    text-align: center;
    font-size: 14px;
    color: #7f8c8d;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
}

.hint input {
    width: 70px;
    padding: 8px 12px;
    border: 2px solid #e0e0e0;
    border-radius: 6px;
    font-size: 14px;
    text-align: center;
}
</style>