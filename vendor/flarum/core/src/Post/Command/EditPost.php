<?php

/*
 * This file is part of Flarum.
 *
 * For detailed copyright and license information, please view the
 * LICENSE file that was distributed with this source code.
 */

namespace Flarum\Post\Command;

use Flarum\User\User;

class EditPost
{
    /**
     * The ID of the post to edit.
     *
     * @var int
     */
    public $postId;

    /**
     * The user performing the action.
     *
     * @var User
     */
    public $actor;

    /**
     * The attributes to update on the post.
     *
     * @var array
     */
    public $data;

    /**
     * @param int $postId The ID of the post to edit.
     * @param User $actor The user performing the action.
     * @param array $data The attributes to update on the post.
     */
    public function __construct($postId, User $actor, array $data)
    {
        $this->postId = $postId;
        $this->actor = $actor;
        $this->data = $data;
    }
}
