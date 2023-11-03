//
The component that renders must be within the context of the Provider.

This means the component getting rendered must be a child/descendant of the Provider component.

If you render a child component directly, without it being nested under the Provider, it won't have access to the context value.

To render a child independently:

Lift the Provider higher so both parent and child are children of it
OR

Pass the context value as a prop instead of using context
You cannot directly render a child component in isolation if it needs to consume a context value. It must be rendered as part of the provider tree.

The parent/wrapper component that also provides context via the Provider must be the one rendered at the root.

In summary:

Component rendered at root must be within Provider tree
Child components can only access context if rendered within parent component
Can lift Provider or pass prop to separate child from parent
But child cannot be directly rendered on its own if using context
The rendering component/tree structure and Provider must be aligned for context consumption to work.
