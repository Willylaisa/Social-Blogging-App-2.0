import React from "react"

export default function Details(props) {
    return (
        <div className="profile">
            <div className="image-name">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIoAAACKCAMAAABCWSJWAAAAMFBMVEXk5ueutLeor7Ln6eqrsbXg4uOyuLvM0NK5vsHc3+C/xMbR1NbY29y8wcTJzM7Dx8rMcPHQAAADC0lEQVR4nO2awZKDIAxAgQCCoP7/3y7o2unuWiGpoc4O79Tp6U0IGBKE6HQ6nU6n0+l0Op1O5x8BAMJ44/Ovj3oIExZnN6Y55n8+JDI4rbTc0UqO4ROxAb88aTx05NA6MiBm+VdklbGhqQtEeyySUa5lYIbXIusqxVYuMJ6aZJlWi+RKJmmRhiYuxZiscWngUl6dbxf2fIFBVZkkF8/s4utiklUcr4lwtSbJZeYMC5wfKL9QhlMFYyLlyGiy4FS0Z1MxFmUi9cSVLRBqN/IDrmwBZFAYN5HHmkjpeFRwO3mDaT/DhFdhqhYALZJYWFQMev8keD5EkaJiOZKFkrUJjgMXZoqKjhwqyA/QhmJRGQkm/1/lRgt0o7S9z2a+0RF3p4MfWWNvjDxf5glvwnR1vlHpRCkoLVNtSymzeUwoK8R2J8NeybgKfoH/DLF8gHZwKhOjCe6TqPhu7xlEtmiei8cOxPqwWE4RgVoi/hZl5XW1SUO7opnN3RPEuKg2JhUuLdrq3yznBV2zwYfIXbnT0ZRpOScDM74a2MmhoccmE6ejMaZemoZklzGL+2GjpGs+T33ICD88am87Bv8pkc0Gkk/CrL8+aSGMf2BWneY+ACYO45TfI6RUzcj007lxDibZNPIB8GF2Wh3sn3ULKWWXENmjk4OxWPniSHnyyUlsGIMDEEd7HIwDlJwCj0xal1kjewlaTfFyGxDRlZblUEbbi089CI7SXFlRdrguh0+fiNSE5qr3NWCqKshzGXtFzU1rTP5BTe9+sd9dm2fCHUKyoSd6xkDdPaPehXxLA3/d4uzQ6m8gtN6KkB4eQbg8JKsL/q4GkUNEEm6wUP96BwtyjVjyZAd3i4Xr986zC6IxVvvgjEp9P4rwTgWHrp6HoDvFeJfK7xHlRQaaqrCAZ16eTOXpQphAEagZFJGmlWhq+stNMkVWbWjTRKRqE9EG2wSKsyJAPB19D1WMSpOkzZQ6qtBm/6wUTv9LS/wChTcClAk7ldLLiWZZK0uTXyNVOwrzVs7n1J1Op9Pp3JQvWqYjS5C3tSUAAAAASUVORK5CYII="
                className="profile--image"/>
                {props.nameInput}
            </div>            
                <h3 className="bio--title">Bio</h3>
                {props.descriptionInput}
            <button onClick={() => props.handleClick()} className="profile-edit-button">Edit Profile</button>
        </div>
    )
}