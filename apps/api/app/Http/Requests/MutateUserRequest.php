<?php

namespace App\Http\Requests;

use App\Abstracts\EnhancedFormRequest;
use App\Enums\RoleEnum;
use Illuminate\Validation\Rule;

class MutateUserRequest extends EnhancedFormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => ['bail', 'string', "min:3", 'max:255'],
            'email' => ['bail', 'string', 'email'],
            'password' => ['bail', 'string', 'min:5'],
            'role' => [Rule::enum(RoleEnum::class)]
        ];
    }
}
