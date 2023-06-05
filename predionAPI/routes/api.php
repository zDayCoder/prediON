<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PredioController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/predios',[PredioController::class, 'index']);
//Puxa por id
Route::get('/predios/{predio}',[PredioController::class,'show']);

//Adicionar prédio
Route::post('/predios',[PredioController::class, 'store']);
//Atualizar prédio
Route::put('/predios/{predio}',[PredioController::class, 'update']);
//Excluir prédio
Route::delete('/predios/{predio}',[PredioController::class,'delete']);