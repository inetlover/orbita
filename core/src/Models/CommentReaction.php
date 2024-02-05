<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * @property int $comment_id
 * @property int $reaction_id
 * @property int $user_id
 * @property Carbon $timestamp
 *
 * @property-read Comment $comment
 * @property-read Reaction $reaction
 * @property-read User $user
 */
class CommentReaction extends Model
{
    use Traits\CompositeKey;

    public $incrementing = false;
    public $timestamps = false;
    protected $guarded = [];
    protected $primaryKey = ['comment_id', 'user_id'];
    protected $casts = ['timestamp' => 'datetime'];

    protected static function booted(): void
    {
        static::created(
            static function (self $record) {
                $record->comment->update(['reactions_count' => $record->comment->userReactions()->count()]);
            }
        );

        static::deleted(
            static function (self $record) {
                $record->comment->update(['reactions_count' => $record->comment->userReactions()->count()]);
            }
        );
    }

    public function comment(): BelongsTo
    {
        return $this->belongsTo(Comment::class);
    }

    public function reaction(): BelongsTo
    {
        return $this->belongsTo(Reaction::class);
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}