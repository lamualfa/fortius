<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class TransactionItem extends Model
{
    use HasFactory;

    // Disable the timestamp to prevent Factory from generating mock timestamps
    public $timestamps = false;

    public function transaction(): HasOne
    {
        return $this->hasOne(Transaction::class);
    }

    public function product(): HasOne
    {
        return $this->hasOne(Product::class);
    }
}
