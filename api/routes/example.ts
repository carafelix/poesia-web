import {
    Bool,
    OpenAPIRoute,
    Path,
    Str,
    type DataOf
} from '@cloudflare/itty-router-openapi'

export class ExampleFetch extends OpenAPIRoute {
    static schema = {
        tags: ['Example'],
        summary: 'Get an example',
        parameters: {
            autor: Path(new Str(), {
                description: 'Author example',
            }),
        },
        responses: {
            '200': {
                description: 'Example fetched successfully',
                schema: {
                    ok: new Bool(),
                    content: new Str(),
                },
            },
        },
    }

    async handle(
        request: Request,
        env: never,
        context: never,
        data: DataOf<typeof ExampleFetch.schema>
    ) {
        return {
            ok: true,
            content: `Example of: ${data.params.autor}`
        }
    }
}