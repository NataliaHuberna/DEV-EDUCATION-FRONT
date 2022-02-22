import React from "react";
import {Provider} from "react-redux";
import {mount} from "enzyme";
import configureStore from "redux-mock-store";

export const mountSmart = (component, store) => {
    const core = <Provider store={store}>{component}</Provider>;
    return mount(core);
};

export const mockStore = configureStore();
