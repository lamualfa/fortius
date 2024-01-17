<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\DevController;
use App\Http\Controllers\Api\ProductController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::middleware('auth:api')->group(function () {
    Route::get('/me', [AuthController::class, 'me']);
    Route::apiResource('products', ProductController::class);
});


if (app()->isLocal()) {
    Route::post('dev/login/{role}', [DevController::class, 'login']);
}
