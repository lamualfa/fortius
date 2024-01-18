<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\DevController;
use App\Http\Controllers\Api\ProductController;
use App\Http\Controllers\Api\UserController;
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

    Route::apiResource('/products', ProductController::class);
    Route::apiResource('/users', UserController::class);
});

Route::post('/sign-in', [AuthController::class, 'signIn']);

if (app()->isLocal()) {
    Route::post('/dev/sign-in/{role}', [DevController::class, 'signIn']);
}
