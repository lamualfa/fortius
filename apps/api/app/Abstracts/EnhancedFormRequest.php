<?php

namespace App\Abstracts;

use Illuminate\Foundation\Http\FormRequest;

abstract class EnhancedFormRequest extends FormRequest
{
  abstract public function rules();

  public function validate(...$params)
  {
    $defaultRules = $this->rules();
    $overrideRules = array_shift($params);
    $rules = is_null($overrideRules) ? $defaultRules : array_merge_recursive($defaultRules, $overrideRules);
    return parent::validate($rules, ...$params);
  }
}