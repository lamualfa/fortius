<?php

namespace App\Http\Requests;

use App\Abstracts\EnhancedFormRequest;

class MutateProductRequest extends EnhancedFormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => ['string', "min:3", 'max:255'],
            'cogs' => ['numeric', 'min:0'],
            'selling_price' => ['numeric', 'min:0']
        ];
    }
}
